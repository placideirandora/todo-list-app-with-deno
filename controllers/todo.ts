import { v4 } from 'https://deno.land/std/uuid/mod.ts';

import Todo from '../interfaces/Todo.ts';
import todos from '../stubs/todos.ts';

export default {
  /**
   * @description Get all todos
   * @route GET /todos
   */
  getAllTodos: ({ response }: { response: any }) => {
    response.status = 200;
    response.body = {
      success: true,
      data: todos,
    };
  },
};
