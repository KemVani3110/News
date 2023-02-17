export interface News{
  id: number,
  title: string,
  description: string,
  cover_image:string,
  readable_publish_date: string,
  user: {
    name: string,
    username:string,
    profile_image: string
  },
  tag_list: {

  }
}
