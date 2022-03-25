import React, { useEffect, useState } from 'react';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
/*import DropdownTreeSelect from 'react-dropdown-tree-select';*/

/*const HM = {
    key: "1",
    label: "Head Movement",
    children: [
        {
            key: "1a",
            label: "Left",
        },
        {
            key: "1b",
            label: "Right",
        },
        {
            key: "1c",
            label: "Up",
        },
        {
            key: "1d",
            label: "Down",
        }
    ]
}

const FE = {
    key: "2",
    label: "Facial Expression",
    children: [
        {
            key: "2a",
            label: "Happy",
        },
        {
            key: "2b",
            label: "Sad",
        },
        {
            key: "2c",
            label: "Angry",
        },
        {
            key: "2d",
            label: "Surprise",
        },
        {
            key: "2e",
            label: "Disgust",
        }, 
        {
            key: "2f",
            label: "Neutral",
        }
    ]
}

const EM = {
    key: "3",
    label: "Eye Movement",
    children: [
        {
            key: "3a",
            label: "Left",
        },
        {
            key: "3b",
            label: "Right",
        },
        {
            key: "3c",
            label: "Up",
        },
        {
            key: "3d",
            label: "Down",
        }
    ]
}

const GC = {
    key: "4",
    label: "Gender Customization",
    children: [
        {
            key: "4a",
            label: "Male",
        },
        {
            key: "4b",
            label: "Female",
        }
    ]
}

const FA = {
    key: "5",
    label: "Face Aging",
    children: [
        {
            key: "5a",
            label: "Older",
        },
        {
            key: "5b",
            label: "Younger",
        }
    ]
}

const AS = {
    key: "6",
    label: "Anime-Style",
    children: [
        {
            key: "6a",
            label: "Anime",
        }
    ]
}

const PA = {
    key: "7",
    label: "Produce Audio",
    children: [
        {
            key: "7a",
            label: "Audio Clip 1",
        },
        {
            key: "7b", 
            label: "Audio Clip 2",
        },
        {
            key: "7c",
            label: "Audio Clip 3",
        }
    ]
}*/

const data = {
    key: "feature",
    label: "Features",
    children: 
    [
        {
            key: "1",
            label: "Head Movement",
            children: [
                {
                    key: "1a",
                    label: "Left",
                },
                {
                    key: "1b",
                    label: "Right",
                },
                {
                    key: "1c",
                    label: "Up",
                },
                {
                    key: "1d",
                    label: "Down",
                }
            ]
        },
        {
            key: "2",
            label: "Facial Expression",
            children: [
                {
                    key: "2a",
                    label: "Happy",
                },
                {
                    key: "2b",
                    label: "Sad",
                },
                {
                    key: "2c",
                    label: "Angry",
                },
                {
                    key: "2d",
                    label: "Surprise",
                },
                {
                    key: "2e",
                    label: "Disgust",
                }, 
                {
                    key: "2f",
                    label: "Neutral",
                }
            ]
        },
        {
            key: "3",
            label: "Eye Movement",
            children: [
                {
                    key: "3a",
                    label: "Left",
                },
                {
                    key: "3b",
                    label: "Right",
                },
                {
                    key: "3c",
                    label: "Up",
                },
                {
                    key: "3d",
                    label: "Down",
                }
            ]
        },
        {
            key: "4",
            label: "Gender Customization",
            children: [
                {
                    key: "4a",
                    label: "Male",
                },
                {
                    key: "4b",
                    label: "Female",
                }
            ]
        },
        {
            key: "5",
            label: "Face Aging",
            children: [
                {
                    key: "5a",
                    label: "Older",
                },
                {
                    key: "5b",
                    label: "Younger",
                }
            ]
        },
        {
            key: "6",
            label: "Anime-Style",
            children: [
                {
                    key: "6a",
                    label: "Anime",
                }
            ]
        },
        {
            key: "7",
            label: "Produce Audio",
            children: [
                {
                    key: "7a",
                    label: "Audio Clip 1",
                },
                {
                    key: "7b", 
                    label: "Audio Clip 2",
                },
                {
                    key: "7c",
                    label: "Audio Clip 3",
                }
            ]
        }
    ]
};



function FeatureSelection() {
    const [ selectedFeature, setSelectedFeature ] = useState(null)
    const twoCharRegex = /^[1-9][a-zA-Z]+$/;

    useEffect(() => {
        console.log("Feature selected: ", selectedFeature)
    })

    const NodeSelect = (event, nodeId) => {
        if (twoCharRegex.test(nodeId)) {
            setSelectedFeature(nodeId)
        } else {
            setSelectedFeature(null)
        }
    } 

    const transformImage = () => {
        console.log(selectedFeature)
    }

    const renderTree = (features) => (
        <TreeItem key={features.key} nodeId={features.key} label={features.label}>
            {Array.isArray(features.children) ? features.children.map((feature) => renderTree(feature)) : null}
        </TreeItem>
    )

    return (
        <div style={{marginLeft: "auto", marginRight: "auto", width: "300px"}}>
                <TreeView defaultCollapseIcon={<ExpandMoreIcon />} defaultExpanded={["feature"]} defaultExpandIcon={<ChevronRightIcon />} sx={{height: 110, flexGrow: 1}} onNodeSelect={NodeSelect}>
                    {renderTree(data)}
                    <button className='transformImage' onClick={transformImage}>Transform!</button>
                </TreeView>
        </div>
    )
}

export default FeatureSelection