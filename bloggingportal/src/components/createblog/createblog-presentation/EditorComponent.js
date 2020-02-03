import React, { Component } from "react";
import { Editor } from "react-draft-wysiwyg";
import "../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

class EditorComponent extends Component {
  constructor(props) {
    super(props);
  }

  uploadImageCallBack = (file) => {
    return new Promise(
      (resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://api.imgur.com/3/image');
        xhr.setRequestHeader('Authorization', '37c4a2d7cb44b99 a8ab1f9fa1f2e1c7ad6a03c611e72d283a2e9412');
        const data = new FormData();
        data.append('image', file);
        xhr.send(data);
        xhr.addEventListener('load', () => {
          const response = JSON.parse(xhr.responseText);
          resolve(response);
        });
        xhr.addEventListener('error', () => {
          const error = JSON.parse(xhr.responseText);
          reject(error);
        });
      }
    );
  }

  render() {
    const { editorState } = this.props.state;
    return (
      <React.Fragment>
        <Editor
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={this.props.onEditorStateChange}
          onFocus={event => {}}
          onBlur={(event, editorState) => {}}
          onTab={event => {}}
          toolbar={{
            image: {
              uploadCallback: this.uploadImageCallBack,
              alt: { present: true, mandatory: true }
            }
          }}
          mention={{
            separator: " ",
            trigger: "@",
            suggestions: [
              { text: "APPLE", value: "apple", url: "apple" },
              { text: "BANANA", value: "banana", url: "banana" },
              { text: "CHERRY", value: "cherry", url: "cherry" },
              { text: "DURIAN", value: "durian", url: "durian" },
              { text: "EGGFRUIT", value: "eggfruit", url: "eggfruit" },
              { text: "FIG", value: "fig", url: "fig" },
              { text: "GRAPEFRUIT", value: "grapefruit", url: "grapefruit" },
              { text: "HONEYDEW", value: "honeydew", url: "honeydew" }
            ]
          }}
          hashtag={{
            separator: " ",
            trigger: "#"
          }}
        />
      </React.Fragment>
    );
  }
}
export default EditorComponent;
