function Box({ children, ...props }) {
    return (
        <div className="m-4 bg-bg-box rounded-lg shadow-md border-black" {...props} >
            {children}
        </div>
    );
}

export default Box;