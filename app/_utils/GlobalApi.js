const { gql, default: request } = require("graphql-request")

const MASTER_URL='https://api-ap-south-1.hygraph.com/v2/'+process.env.NEXT_PUBLIC_HYGRAPH_API_KEY+'/master'

const getAllSystemUsers=async()=>{
    const query=gql`
        query MyQuery {
            systemUsers {
                address
                contactNumber
                email
                firstName
                lastName
                clerkId
            }
        }
    `

    const result=await request(MASTER_URL,query);
    return result;
}

const createNewSystemUser=async(email,firstName,lastName,address,contactNumber,clerkId)=>{
    const query=gql`
        mutation CreateSystemUser {
            createSystemUser(
                data: {
                    email: "`+email+`"
              firstName: "`+firstName+`"
              lastName: "`+lastName+`"
              address: `+address+`
              contactNumber: `+contactNumber+`
              clerkId: "`+clerkId+`"
            }
          ) {
            id
            clerkId
            address
            contactNumber
            email
            firstName
            lastName
            member {
              id
              adminStatus
            }
          }
          publishManySystemUsers(to: PUBLISHED) {
               count
          }
        }
     `
    return await request(MASTER_URL, query);
}

const findSystemUserByClerkId=async(clerkId)=>{
    const query=`query FindSystemUserByClerkId {
          systemUser(where: {clerkId: "`+clerkId+`"}) {
            id
            clerkId
            address
            contactNumber
            email
            firstName
            lastName
            member {
              id
              adminStatus
            }
          }
        }
        `
    return await request(MASTER_URL, query);
}



export default {
    getAllSystemUsers,
    createNewSystemUser,
    findSystemUserByClerkId,
}
