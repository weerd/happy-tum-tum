import classnames from 'classnames';

const ArrowUpIcon = ({ className }) => (
  <svg
    className={classnames('fill-current', className)}
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M7 10v8h6v-8h5l-8-8-8 8h5z' />
  </svg>
);

export default ArrowUpIcon;
