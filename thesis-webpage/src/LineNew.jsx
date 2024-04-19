function LineNew() {

    return (
        <div
        style={{
          width: '1px', 
          height: '200px',
          background: `linear-gradient(to right, white 50%, transparent 50%)`, // Create a thin line using gradient
        }}
      ></div>
    )
}

export default LineNew;