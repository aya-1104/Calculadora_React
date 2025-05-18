import './styles/button.css';

export const Button = ({ value, clase, isWide = false, ...props }) => {
  
  return (
    <button className={`calc-btn ${clase} ${isWide ? 'wide' : ''}`} {...props}>
      {value}
    </button>
  );
};