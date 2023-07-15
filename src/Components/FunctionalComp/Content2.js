function ContColumn (props) {  
    return(<div class="column">
              <div class="card">  
                <div class="card-content">
                  <div class="media">
                    <div class="media-left">
                      <figure class="image">
                        <img src={props.imgs} alt={props.alts}/>
                      </figure>    
                    </div>
                  </div>
                  <div class="content">
                    <h3> {props.titles}</h3>
                   {props.contents}    
                  </div>
                </div>
              </div>
            </div>  
    );   
} 

export  default ContColumn;