/**
 * Utility functions for WebGL support detection
 */

export interface WebGLSupport {
  supported: boolean;
  context?: WebGLRenderingContext | null;
  vendor?: string;
  renderer?: string;
  version?: string;
  error?: string;
}

/**
 * Detects WebGL support and returns detailed information
 */
export function detectWebGLSupport(): WebGLSupport {
  const canvas = document.createElement("canvas");

  try {
    // Try to get WebGL context
    const gl =
      canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

    if (!gl) {
      return {
        supported: false,
        error: "WebGL not supported",
      };
    }

    // Get WebGL information
    const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
    const vendor = debugInfo
      ? gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL)
      : "Unknown";
    const renderer = debugInfo
      ? gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL)
      : "Unknown";
    const version = gl.getParameter(gl.VERSION);

    return {
      supported: true,
      context: gl,
      vendor,
      renderer,
      version,
    };
  } catch (error) {
    return {
      supported: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

/**
 * Checks if WebGL is available and working
 */
export function isWebGLAvailable(): boolean {
  return detectWebGLSupport().supported;
}

/**
 * Gets a human-readable description of WebGL support
 */
export function getWebGLSupportDescription(): string {
  const support = detectWebGLSupport();

  if (!support.supported) {
    return `WebGL not supported: ${support.error}`;
  }

  return `WebGL supported - Vendor: ${support.vendor}, Renderer: ${support.renderer}, Version: ${support.version}`;
}
