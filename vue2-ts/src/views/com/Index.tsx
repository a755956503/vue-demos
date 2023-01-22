import { Button } from 'ant-design-vue';
import { Vue, Component, Watch } from 'vue-property-decorator';
// @ts-ignore
import Parent from './Parent';
import ComChild from './ComChild';
@Component({
  name: 'ComIndex'
})
class ComIndex extends Vue {
  // 测试深层次修改能不能触发更新。=》 能
  prop1: any = { a: [[
    {
      a: 1
    }
  ]]};
  @Watch('prop1.a')
  onProptChange(val: string) {
    console.log(val);
  }
  changeProperty() {
    this.prop1.a[0][0].a = this.prop1.a[0][0].a + 1;
  }
  render() {
    return <div class="base-box">
      <Button onClick={this.changeProperty.bind(this)}>修改属性</Button>
      <span>{this.prop1.a[0][0].a}</span>
      <Parent attrs={{ p1: 'p1'}}/>
      <ComChild>
        <div>111</div>
      </ComChild>
      <ComChild>
        <Button onClick={this.changeProperty.bind(this)}>修改属性</Button>
      </ComChild>
    </div>
  }
}

export default ComIndex;