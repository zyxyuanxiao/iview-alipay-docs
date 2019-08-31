let code = {};

code.import = `
"usingComponents": {
    "i-alert": "../../dist/alert/index"
}
`;
code.usage = `
<i-alert>
    An info prompt
</i-alert>
<i-alert type="success">
    An success prompt
</i-alert>
<i-alert type="warning">
    An warning prompt
</i-alert>
<i-alert type="error">
    An error prompt
</i-alert>
<i-alert>
    An info prompt
    <view slot="desc">Content of prompt. Content of prompt.</view>
</i-alert>
<i-alert type="success">
    An success prompt
    <view slot="desc">Content of prompt. Content of prompt.</view>
</i-alert>
<i-alert type="warning">
    An warning prompt
    <view slot="desc">Content of prompt. Content of prompt.</view>
</i-alert>
<i-alert type="error">
    An error prompt
    <view slot="desc">Content of prompt. Content of prompt.</view>
</i-alert>
<i-alert show-icon>
    An info prompt
</i-alert>
<i-alert type="success" show-icon>
    An success prompt
</i-alert>
<i-alert type="warning" show-icon>
    An warning prompt
</i-alert>
<i-alert type="error" show-icon>
    An error prompt
</i-alert>
<i-alert show-icon desc>
    An info prompt
    <view slot="desc">Content of prompt. Content of prompt.</view>
</i-alert>
<i-alert type="success" show-icon desc>
    An success prompt
    <view slot="desc">Content of prompt. Content of prompt.</view>
</i-alert>
<i-alert type="warning" show-icon desc>
    An warning prompt
    <view slot="desc">Content of prompt. Content of prompt.</view>
</i-alert>
<i-alert type="error" show-icon desc>
    An error prompt
    <view slot="desc">Content of prompt. Content of prompt.</view>
</i-alert>
<i-alert closable onClose="handleClick">
    An info prompt
</i-alert>
<i-alert type="success" show-icon desc closable onClose="handleClick">
    An success prompt
    <view slot="desc">Content of prompt. Content of prompt.</view>
</i-alert>
`;

export default code;