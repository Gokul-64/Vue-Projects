const { createApp } = Vue;
createApp({
    data(){
        return{
            text:'',
            nextInd:3,
            currentFilter:'',
            tasks:[{
                ind:1,
                task:'Sample Task',
                checked:true
            }, 
            {
                ind:2,
                task:'Sample Task',
                checked:false
            }]
        }
    },
    computed: {
        filteredTasks() {
            if (this.currentFilter === 'completed') {
                return this.tasks.filter(task => task.checked);
            } else if (this.currentFilter === 'active') {
                return this.tasks.filter(task => !task.checked);
            } else {
                return this.tasks;
            }
        }
    },
    methods:{
        addtasks(){
            if(this.text.trim() !== ""){
                this.tasks.push(
                    {
                        ind:this.nextInd++,
                        task:this.text.trim(),
                        checked:false
                    })
                this.text = ''
            }
        },
        removetasks(taskIndToRemove) { 
            const index = this.tasks.findIndex(task => task.ind === taskIndToRemove);
            
            if (index > -1) {
                this.tasks.splice(index, 1);
            }
        },
        filterChecked(){
            this.currentFilter = 'completed';
        },
        
        filterUnChecked(){
            this.currentFilter = 'active';
        },

        filterAll(){
            this.currentFilter = 'all';
        }
    }
}).mount('#app')