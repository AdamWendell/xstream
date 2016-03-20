import xs from '../../src/index';
import {noop} from '../../src/utils/noop';
import * as assert from 'assert';

describe('Stream.prototype.startWith', () => {
  it('should allow starting with a value', (done) => {
    const stream = xs.from([100]);

    stream.startWith(1).take(1).subscribe({
      next(x: any) {
        assert.strictEqual(x, 1);
      },
      error: done.fail,
      end: done
    })
  })
});