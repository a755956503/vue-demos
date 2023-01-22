import { Button } from 'ant-design-vue';
import { Vue, Component, Watch } from 'vue-property-decorator';

@Component({
  name: 'ComChild'
})
class ComChild extends Vue {
  render() {
    console.log('this.$slots', this.$slots);
    return <div>
      {this.$slots && this.$slots.default}
    </div>
  }
}

export default ComChild;