<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/108718230?v=4',
    name: 'Danne Dullers',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/DanneD-Wisemen' },
    ]
  },
]
</script>

# Meet the team

This project is created and maintained by a team of passionate Android developers. If you want to contribute,
check out our [github](https://github.com/appwise-labs/Android-Manifesto) and make a pull request!

<VPTeamMembers size="small" :members="members" />
