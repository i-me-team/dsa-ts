import InputUtil from '../../../utils/InputUtil.ts';
import logger from '../../../utils/logger.ts';

export default async function adMatrixRepresentation() {
  const input = new InputUtil();
  const _ = await input.readInt('Enter the number of vertices: ');
  const m = await input.readInt('Enter the number of edges: ');
  const matrix = Array.from({ length: m }, () => new Array(m).fill(0));

  logger('Enter edges (u v):');
  for (let i = 0; i < m; i++) {
    let [u, v] = await input.readInts();
    matrix[u][v] = 1;
    matrix[v][u] = 1;
  }

  logger('Adjacency matrix representation of the graph:');
  logger(matrix.map((row) => row.join(' ')).join('\n'));

  input.close();
}

adMatrixRepresentation();
