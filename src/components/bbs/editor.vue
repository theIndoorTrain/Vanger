<template>
        <quill-editor 
      v-model="content" 
      ref="myQuillEditor" 
      :options="editorOption" 
      @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
      @change="onEditorChange($event)" class="quillEditor">
    </quill-editor> 
</template>

<script>
    import { quillEditor } from 'vue-quill-editor'
    export default {
        name:'editor',
        data(){
            return {
                content:null,
                editorOption:{
                    
                }
            }
        },
        methods:{
            onEditorBlur(){//失去焦点事件
            },
            onEditorFocus(){//获得焦点事件
            },
            onEditorChange(){//内容改变事件
            }
        }
    }
</script>

<style scoped>

.quillEditor{
    height: 550px;
    background: #F2F1D7;
}

</style>