import { GatsbyNode, NodePluginArgs } from 'gatsby'


export const sourceNodes : GatsbyNode["sourceNodes"] = async({ actions, createNodeId, createContentDigest}:NodePluginArgs)=>{
    const { createNode } =actions;
    
    return
}