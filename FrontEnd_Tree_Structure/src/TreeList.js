import React from "react";
// import Header from "components/Header";
import Tree from "./Component/Tree";
// import ExternalInfo from "components/ExternalInfo";

const treeData =  [
    {
        "title": "Item 1",
        "items": [
            {
                "title": "Item 1.1",
                "items": [
                    {
                        "title": "1.1.1",
                        "items": []
                    },
                    {
                        "title": "1.1.2",
                        "items": []
                    }
                ]
            },
            {
                "title": "Item 1.2",
                "items": [
                    {
                        "title": "1.2.1",
                        "items": []
                    }
                ]
            }
        ]
    },
    {
        "title": "Item 2",
        "items": [
            {
                "title": "2.1",
                "items": []
            },
            {
                "title": "2.2",
                "items": []
            }
        ]
    },
    {
        "title": "Item 3",
        "items": [
            {
                "title": "3.1",
                "items": []
            },
            {
                "title": "3.2",
                "items": [
                    {
                        "title": "3.2.1",
                        "items": []
                    }
                ]
            }
        ]
    }
];

  console.log("treedata from list comp",treeData)

const TreeList = () => {
  return (
    <>
     

      <div className="row maindiv">
        <div className="col text-center">
          <h2>Tree Structure</h2>
          <p className="mt-3">
            <div className="row mt-3 d-flex justify-content-center">
              <div className="col-lg-8  text-dark">
                <Tree data={treeData} />
              </div>
            </div>
          </p>
        </div>
      </div>
    </>
  );
};

export default TreeList;