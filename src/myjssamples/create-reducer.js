// code from a question on javascript slack channel

const SET_SEARCHED_RECIPES = 'SET_SEARCHED_RECIPES';

const createReducer = function(initialState, handlers) {
    return function reducer(state = initialState, action) {
        if (handlers.hasOwnProperty(action.type)) {
            return handlers[action.type](state, action)
        } else {
            return state
        }
    }
}

const searchedRecipes = createReducer({}, {
    [SET_SEARCHED_RECIPES](state, action) {
        let newState = {}
        action.recipes.forEach((recipe) => {
            let id = recipe.href
            newState[id] = Object.assign({}, recipe, {id});
        });
        return newState;
    }
});

const create = function(arg1) {
    return function bla(x) {
        return arg1.hi('hey') + 'What?'+JSON.stringify(arg1);
    };
}

const functionKey = 'hi';
const use = create({[functionKey](y){
        return 'oh!';
    }
});

const myObj = {['hi'](){
        return 'function called!';
    }
};

module.exports = createReducer;
