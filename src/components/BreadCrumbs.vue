<script>
export default {
  name: 'BreadCrumbs',
  props: {
    data: Array
  },
  render () {
    return (
      this.data.map((v, i) => {
        return (
          <span class="text-sm text-gray-400">{v.label}&nbsp;{i !== this.data.length - 1 ? '/' : ''}&nbsp;</span>
        )
      })
    )
  }
}
</script>
