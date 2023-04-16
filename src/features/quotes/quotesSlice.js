// Action Creators
export const addQuote = (quoteData) => {
  return {
    type: "quotes/add",
    payload: quoteData,
  }
}

export const removeQuote = (id) => {
  return {
    type: "quotes/remove",
    payload: id,
  }
}

export function upvoteQuote(id) {
  return {
    type: "quotes/upvote",
    payload: id,
  }
}

export function downvoteQuote(id) {
  return {
    type: "quotes/downvote",
    payload: id,
  }
}

// TODO: Create action creators as defined in tests

// Reducer
const initialState = [];

export default function quotesReducer(state = initialState, action) {
  // return state;
  switch (action.type) {
    case "quotes/add":
      return [...state, action.payload]
    case "quotes/remove":
      return state.filter((quote) => quote.id !== action.payload)
    case "quotes/upvote":
      return state.map((quote) => {
        if(quote.id === action.payload) {
          return {
            ...quote,
            votes: quote.votes + 1,
          }
        } else {
          return quote
        }
      })
    case "quotes/downvote":
      return state.map((quote) => {
        if(quote.id === action.payload && quotesReducer.votes > 0) {
          return {
            ...quote,
            votes: quotesReducer.votes - 1
          }
        } else {
          return quote
        }
      })
    default:
      return state
  }
}
