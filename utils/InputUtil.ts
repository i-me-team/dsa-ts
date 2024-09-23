import readline from 'readline';
import colors from 'colors';

class InputUtil {
  private rl: readline.Interface;

  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  // Read a single line of input
  readLine(prompt: string = ''): Promise<string> {
    return new Promise((resolve) => {
      this.rl.question(colors.green.bold(prompt), (answer) => {
        resolve(answer);
      });
    });
  }

  // Read multiple lines of input
  async readLines(n: number, prompt: string = ''): Promise<string[]> {
    const lines: string[] = [];
    for (let i = 0; i < n; i++) {
      const line = await this.readLine(colors.green.bold(prompt));
      lines.push(line);
    }
    return lines;
  }

  // Read a single integer
  async readInt(prompt: string = ''): Promise<number> {
    const input = await this.readLine(colors.green.bold(prompt));
    return parseInt(input, 10);
  }

  // Read multiple integers from a single line
  async readInts(prompt: string = ''): Promise<number[]> {
    const input = await this.readLine(colors.green.bold(prompt));
    return input.split(' ').map(Number);
  }

  // Close the readline interface
  close(): void {
    this.rl.close();
  }
}

export default InputUtil;
