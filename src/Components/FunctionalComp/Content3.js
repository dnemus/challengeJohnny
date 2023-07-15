function ContColumn2 (props) {  
    return(
    <div class="column">
      <div class="card">  
          
                <figure class="image is-4by3">
                  <img src={props.imgs} alt={props.alts}/>
                </figure>
              
            
          <div class="card-content">
            <div class="content">
                  {props.authors}<br/><br/>
                    <h4 class="h4">{props.titles}</h4>
                  {props.contents} 
            </div>
          </div>
      </div>
    </div>
  
    );   
} 

export  default ContColumn2;