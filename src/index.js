import dlt, * as dltOther from './lottery/dlt';
import qlc, * as qlcOther from './lottery/qlc';
import qxc, * as qxcOther from './lottery/qxc';
import ssq, * as ssqOther from './lottery/ssq';

const result = {
  dlt,
  qlc,
  qxc,
  ssq,
};
Object.assign(result, dltOther);
Object.assign(result, qlcOther);
Object.assign(result, qxcOther);
Object.assign(result, ssqOther);

export default result;
