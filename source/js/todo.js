
var todo = (function (){

  return{
    init : function () {
      var _this = this;
      $(".add-task").on('click', function () {
        var
            $this = $(this),
            container = $this.closest('.todo-wrap'),
            valueTask = container.find('.input-task').val();

        if (!valueTask) {
          alert("поле пустое");
          return false;

        }
        var containerTodo = "<li class = 'todo-container'><span>"+valueTask+"</span><div class = 'trigger trig-pencil edit-task'></div><div class = 'trigger trig-close delete-task'></div></li>";
        $(".todos-container").append(containerTodo);
        $(".input-task").val("");

        _this.deleteTask();
        _this.editTask();
      });

      $(".remove-task").on('click', function(){
        var $this = $(this),
            container = $this.closest('.todo-wrap'),
            inputTask = container.find('.input-task');
        inputTask.val("");
      })

    },
    deleteTask : function () {
      $(".delete-task").on('click', function(){
        $(this).parents(".todo-container").remove();
      });
    },
    editTask: function () {
      $(".edit-task").on('click', function () {
        var $this = $(this),
            valueEditTask = $this.siblings('span'),
            container = $this.closest('.todo-wrap'),
            editBlock = container.find('.edit__wrap'),
            inputForEdit = container.find(".input-task-edit"),
            duration = 200;


        inputForEdit.val(valueEditTask.text());
        editBlock.stop(true).fadeIn(duration);

        $(".save-changes, .close-changes").unbind('click');

        $(".save-changes").on('click', function () {

          if (!inputForEdit) {
            alert("поле пустое");
            return false;
          }
          valueEditTask.text(inputForEdit.val());
          inputForEdit.val("");
          editBlock.stop(true).fadeOut(duration);

        });
        $(".close-changes").on('click', function(){
          editBlock.stop(true).fadeOut(duration);
        })

      })
    }
  }
})();
(function(){

  todo.init();
})();


//}
