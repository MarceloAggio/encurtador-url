import './button.css';

const Button = ({ propsBtn , type}) => {
    return (
        <div>
            <button type={type} className='button'>{propsBtn}</button>
        </div>
    )
}

export default Button;