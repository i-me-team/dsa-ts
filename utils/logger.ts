import colors from 'colors';

interface LoggerOptions {
  color?: keyof typeof colors; // Ensure only valid colors are allowed
  type?: 'log' | 'warn' | 'error'; // Restrict type to 'log', 'warn', or 'error'
}

/**
 * Logs a message to the console with optional color and type.
 * @param output - The message to be logged.
 * @param options - Optional settings for the log message.
 * @param options.color - The color of the message (default: 'magenta' for 'log', 'red' for 'error' and 'yellow' for 'warn').
 * @param options.type - The type of the message, either 'log', 'warn', or 'error' (default: 'log').
 */
export default function logger(
  output: string,
  options: LoggerOptions = {},
): void {
  const { type = 'log', color } = options;

  const defaultColor =
    type === 'error' ? 'red' : type === 'warn' ? 'yellow' : 'magenta';

  // Ensure chosenColor is a valid color from the 'colors' package
  const chosenColor = color ?? defaultColor;

  // Type assertion for safe access to color functions with bold
  const coloredOutput = (colors as any)[chosenColor]?.bold(output)?.trim();

  // Log the colored output
  if (coloredOutput) {
    console[type](coloredOutput);
  } else {
    // Fallback in case something goes wrong with color application
    console[type](colors.magenta.bold(output).trim());
  }
}
