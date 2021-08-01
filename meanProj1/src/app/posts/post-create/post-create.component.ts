import { Component } from '@angular/core';

@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.css']
  })
export class PostCreateComponent {
    val = '';
    enteredValue ='Two Way Binding: ';
    // newPost = 'Local Ref: ';
    onAddPost(){
        // console.dir(postInput);
        // this.newPost += postInput.value;
        // console.log(this.newPost);
        // this.enteredValue+= this.val;
        console.log(this.enteredValue);
        console.log(this.val);
    }
}