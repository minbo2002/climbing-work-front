function stadium(props){
    return (
        <div className="stadium" key={props.stadium.id}>
              <h3>
                <label>
                {props.stadium.name}
                </label>
              </h3>
            </div>
    )
}

export default stadium;