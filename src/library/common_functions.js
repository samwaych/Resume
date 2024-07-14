import '../App.css';

function genList(items, style) {
    let itemSection = []
    for (let item of items) {
        itemSection.push(<li>{item}</li>)
    }
    return (<ul className={style}>{itemSection}</ul>)
}

export default genList;