function Line() {

    return (
        <div
        style={{
          width: '1px', 
          height: '25rem',
          background: `linear-gradient(to right, white 50%, transparent 50%)`, // Create a thin line using gradient
        }}
      ></div>
    )
}

export default Line;