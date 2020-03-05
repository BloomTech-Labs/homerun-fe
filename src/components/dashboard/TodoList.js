import React from 'react';
import { List } from 'semantic-ui-react';

import { SwipeableList, SwipeableListItem } from '@sandstreamdev/react-swipeable-list';

import '@sandstreamdev/react-swipeable-list/dist/styles.css';
import '../../SASS/TodoList.scss';

import SwipeLeft from './SwipeLeft.js';

import Todo from './Todo.js';


const TodoList= () => (
  <List size='massive' divided verticalAlign='middle'>
    <SwipeableList>
      <SwipeableListItem
      swipeLeft = {{
        content: <SwipeLeft />,
        action: () => console.log("Worked!")
      }}
      swipeRight={{
        content: <div>SwipeRight</div>,
        action: () => console.log('swiping')
      }}
      >
        <Todo task={'Task 1'} />
      </SwipeableListItem>
      
      <Todo task={'Task 2'} />
      <Todo task={'Task 3'} />
    </SwipeableList>
  </List>
)



    </SwipeableList>
  </List>
)


    </SwipeableList>
  </List>
)


    </SwipeableList>
  </List>
)


    </SwipeableList>
  </List>
)


    </SwipeableList>
  </List>
)


    </SwipeableList>
  </List>
)


    </SwipeableList>
  </List>
)


    </SwipeableList>
  </List>
)


    </SwipeableList>
  </List>
)


    </SwipeableList>
  </List>
)


    </SwipeableList>
  </List>
)


    </SwipeableList>
  </List>
)


    </SwipeableList>
  </List>
)


    </SwipeableList>
  </List>
)


    </SwipeableList>
  </List>
)


export default TodoList;
