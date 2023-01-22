import Request from '../request';
export default {
  methods: {
    async request(options) {
      return await Request(options);
    }
  }
}