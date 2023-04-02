import './MenuItem.css'

function MenuItem({liText}) {
    return (
        <li><a href="#"><span className="button_top">{liText}</span></a></li>
    );
}
export default MenuItem;