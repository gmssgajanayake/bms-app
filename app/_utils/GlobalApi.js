const {gql, default: request} = require("graphql-request")

const MASTER_URL = 'https://api-ap-south-1.hygraph.com/v2/' + process.env.NEXT_PUBLIC_HYGRAPH_API_KEY + '/master'

const getAllSystemUsers = async () => {
    const query = gql`
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

    const result = await request(MASTER_URL, query);
    return result;
}

const createNewSystemUser = async (email, firstName, lastName, address, contactNumber, clerkId) => {
    const query = gql`
        mutation CreateSystemUser {
            createSystemUser(
                data: {
                    email: "` + email + `"
              firstName: "` + firstName + `"
              lastName: "` + lastName + `"
              address: ` + address + `
              contactNumber: ` + contactNumber + `
              clerkId: "` + clerkId + `"
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

const findSystemUserByClerkId = async (clerkId) => {
    const query = `query FindSystemUserByClerkId {
          systemUser(where: {clerkId: "` + clerkId + `"}) {
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

const deleteSystemUserByClerkId = async (clerkId) => {
    const query = `
        mutation MyMutation {
          deleteSystemUser(where: {clerkId: "${clerkId}"}) {
            id
          }
          deleteManySystemUsersConnection(where: {clerkId: "${clerkId}"}) {
            edges {
              node {
                id
              }
            }
          }
       }
    `;
    return await request(MASTER_URL, query);
}

const updateSystemUserByClerkId = async (clerkId,address,contactNumber) => {
    const query = `
        mutation MyMutation {
              updateSystemUser(
                data: {contactNumber: ${contactNumber}, address: "${address}" }
                where: {clerkId: "${clerkId}"}
              ) {
                id
              }
              publishManySystemUsers(to: PUBLISHED) {
                           count
              }
        }
    `;
    return await request(MASTER_URL, query);
}

const createNewBoarding = async (boardingName, boardingAddress, description, clerkId) => {
    const query = `
        mutation MyMutation {
          createMember(
            data: {adminStatus: true, boarding: {create: {name: "${boardingName}", address: "${boardingAddress}", discription: "${description}", availability: true}}, systemUser: {connect: {clerkId: "${clerkId}"}}}
          ) {
            id
          }
          publishManyBoardings(to: PUBLISHED) {
            count
          }
          publishManySystemUsers(to: PUBLISHED) {
            count
          }
          publishManyMembers(to: PUBLISHED) {
            count
          }
        }
    `;
    return await request(MASTER_URL, query);
}



const getAllBoardings = async () => {
    const query = `
        query MyQuery {
          boardings {
            address
            discription
            id
            name
            availability
            members(where: {adminStatus: true}) {
              id
            }
          }
        }
    `;
    return await request(MASTER_URL, query);
}


const getAllRequest = async (clerkId) => {
    const query = `
        query MyQuery {
          inviteToBoardings(where: {systemUser: {clerkId: "${clerkId}"}}) {
            id
            member {
              id
              boarding {
                name
                id
                discription
                address
              }
            }
          }
        }

    `;
    return await request(MASTER_URL, query);
}


const createNewRequesr = async (adminId,clerkId) => {
    const query = `
       mutation MyMutation {
          createInviteToBoarding(
            data: {member: {connect: {id: "${adminId}"}}, systemUser: {connect: {clerkId: "${clerkId}"}}}
          ) {
            id
          }
          publishManyInviteToBoardings(to: PUBLISHED) {
            count
          }
          publishManyMembers(to: PUBLISHED) {
            count
          }
          publishManySystemUsers(to: PUBLISHED) {
            count
          }
    }

    `;
    return await request(MASTER_URL, query);
}




const deleteRequest = async (requestId) => {
    const query = `
       mutation MyMutation {
          deleteInviteToBoarding(where: {id: "${requestId}"}) {
            id
          }
        }


    `;
    return await request(MASTER_URL, query);
}




export default {
    getAllSystemUsers,
    createNewSystemUser,
    findSystemUserByClerkId,
    deleteSystemUserByClerkId,
    updateSystemUserByClerkId,
    createNewBoarding,
    getAllBoardings,
    getAllRequest,
    createNewRequesr,
    deleteRequest,
}
