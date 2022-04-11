const WrappedIcon = ({Icon, size})=>{
    return <Icon size={ (size ? size + "px" : "50px") } />
}

export {WrappedIcon};