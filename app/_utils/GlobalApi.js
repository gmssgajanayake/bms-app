const {gql, default: request} = require("graphql-request")

const MASTER_URL = 'https://api-ap-south-1.hygraph.com/v2/' + process.env.NEXT_PUBLIC_HYGRAPH_API_KEY + '/master'

// Create a new Date object for the current date and time
const today = new Date();

// Array of month names to convert month from number to abbreviation
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// Get the day from the Date object
const day = today.getDate();

// Get the month name from the monthNames array based on the current month
const month = monthNames[today.getMonth()];

// Get the year from the Date object
const year = today.getFullYear();

// Format the date as 'DD Mon YYYY'
const formattedToday = `${day} ${month} ${year}`;





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

const updateSystemUserByClerkId = async (clerkId, address, contactNumber) => {
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

const getAllRequestByBoardingId = async (boardingId) => {
    const query = `
        query MyQuery {
          inviteToBoardings(
            where: {member: {boarding: {id: "${boardingId}"}}}
          ) {
            id
            systemUser {
              clerkId
              firstName
              lastName
              email
              contactNumber
              address
            }
          }
        }

    `;
    return await request(MASTER_URL, query);
}


const getBoardingByClerkId = async (ClerkId) => {
    const query = `
        query MyQuery {
          systemUser(where: {clerkId: "${ClerkId}"}) {
            member {
              boarding {
                id
                availability
              }
            }
          }
        }

    `;
    return await request(MASTER_URL, query);
}

const createNewRequesr = async (adminId, clerkId) => {
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

const rejectRequest = async (requestId) => {
    const query = `
       mutation MyMutation {
          deleteInviteToBoarding(where: {id: "${requestId}"}) {
            systemUser {
              clerkId
            }
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


const acceptRequest = async (clerkId, boardingId, requestId) => {
    const query = `
       mutation MyMutation {
          updateBoarding(
            data: {members: {create: {adminStatus: false, systemUser: {connect: {clerkId: "${clerkId}"}}, boarding: {connect: {id: "${boardingId}"}}}}}
            where: {id: "${boardingId}"}
          ) {
            id
          }
          deleteInviteToBoarding(where: {id: "${requestId}"}) {
            systemUser {
              clerkId
            }
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


const updateBoardingAvailability = async (boardingId, availability) => {
    const query = `
      mutation MyMutation {
          updateBoarding(
            data: {availability: ${availability}}
            where: {id: "${boardingId}"}
          ) {
            id
          }
          publishManyBoardings(to: PUBLISHED) {
            count
          }
        }
    `;
    return await request(MASTER_URL, query);
}

const getBoardingMembers = async (boardingId) => {
    const query = `
      query MyQuery {
          boarding(where: {id: "${boardingId}"}) {
            members {
              systemUser {
                clerkId
              }
              id
            }
          }
        }
    `;
    return await request(MASTER_URL, query);
}


const changeAdmin = async (memberId, adminStatus) => {
    const query = `
    mutation MyMutation {
      updateMember(
        data: {adminStatus: ${adminStatus}}
        where: {id: "${memberId}"}
      ) {
        id
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


const getAllBudgets = async (boardingId) => {
    const query = `
    query MyQuery {
          boarding(where: {id: "${boardingId}"}) {
            budgets {
              balance
              closedDate
              id
              openedDate
              statusOfBudget
              total
            }
          }
        }
    `;
    return await request(MASTER_URL, query);
}

const closeBudget = async (budgetId) => {
    const query = `
    mutation MyMutation {
      updateBudget(data: {closedDate: "${formattedToday}", statusOfBudget: false}, where: {id: "${budgetId}"}) {
        id
      }
        publishManyBudgets(to: PUBLISHED) {
            count
         }
    }

    `;
    return await request(MASTER_URL, query);
}

const createNewBudget = async (boardingId, balance) => {
    const query = `
    mutation MyMutation {
      createBudget(
        data: {total: 0, statusOfBudget: true, openedDate: "${formattedToday}", balance: ${balance}, boarding: {connect: {id: "${boardingId}"}}}
      ) {
        id
      }
      publishManyBudgets(to: PUBLISHED) {
        count
      }
      publishManyBoardings(to: PUBLISHED) {
        count
      }
    }

    `;
    return await request(MASTER_URL, query);
}


const createBudgetSpend = async (reason, price,date,budgetId,desc,balance) => {
    const query = `
    mutation MyMutation {
      createSpendForBudget(
        data: {forWhat: "${reason}", price: ${price}, date: "${date}", budget: {connect: {id: "${budgetId}"}}, description: "${desc}"}
      ) {
        id
      }
      updateBudget(data: {balance: ${balance}}, where: {id: "${budgetId}"}) {
        id
      }
       publishManyBudgets(to: PUBLISHED) {
        count
      }
      publishManySpendForBudgets(to: PUBLISHED) {
        count
      }
    }
    `;
    return await request(MASTER_URL, query);
}

const makeMemberPayment = async (price,budgetId,memberId) => {
    const query = `
    mutation MyMutation {
          createMemberPayment(
            data: {price: ${price}, paidDate: "${formattedToday}", budget: {connect: {id: "${budgetId}"}}, member: {connect: {id: "${memberId}"}}, painStatus: Pending}
          ) {
            id
          }
          publishManyBudgets(to: PUBLISHED) {
            count
          }
          publishManyMembers(to: PUBLISHED) {
            count
          }
          publishManyMemberPayments(to: PUBLISHED) {
            count
          }
        }
    `;
    return await request(MASTER_URL, query);
}

const getMemberIdByClerkId = async (clerkId) => {
    const query = `
    query MyQuery {
          systemUser(where: {clerkId: "${clerkId}"}) {
            member {
              id
            }
          }
        }
    `;
    return await request(MASTER_URL, query);
}

const getMemberPaymentByMemberId = async (memberId) => {
    const query = `
    query MyQuery {
          memberPayments(
            where: {member: {id: "${memberId}"}}
            orderBy: createdAt_DESC
            ) {
            paidDate
            painStatus
            price
            createdAt
            id
            budget {
              id
            }
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
    getAllRequestByBoardingId,
    getBoardingByClerkId,
    acceptRequest,
    rejectRequest,
    updateBoardingAvailability,
    getBoardingMembers,
    changeAdmin,
    getAllBudgets,
    createNewBudget,
    closeBudget,
    createBudgetSpend,
    makeMemberPayment,
    getMemberIdByClerkId,
    getMemberPaymentByMemberId
}
