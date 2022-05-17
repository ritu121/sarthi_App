
import {React,useState} from 'react'
// import { faBars} from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./tree.css"

const Tree = ({ data = [] }) => {
  console.log("data from tree",data)
    return (
      <div className='tree-container' >
        <ul >
          {data.map((tree) => (
            <TreeNode node={tree} />
          ))}  
        </ul>
      </div>
    );
  };
  const TreeNode = ({ node }) => {
    const [Child, setChild] = useState(false);
     
    const hasChild = node.items ? true : false;

  
    return (
      <li className="tree-node border-0 ">
        <div className="d-fle x" onClick={(e) => setChild((el) => !el)}>
        <FontAwesomeIcon icon="fa-solid fa-chevron-right" />
        
      
          {hasChild && (
            <div
              className={`d-inline toggle ${
                Child ? "active" : ""
              }`}
            >
             
            </div>
          )}
  
          <div className="col ">
            <i className={`${node.icon}`}> </i>
            {node.title}
          </div>
        </div>
  
        {hasChild && Child && (
          <div>
            <ul className=" tree-container">
              <Tree data={node.items} />
            </ul>
          </div>
        )}
        
      
        
      </li>
    );
  };
export default Tree




