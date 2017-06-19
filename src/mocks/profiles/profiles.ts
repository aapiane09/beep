import { Profile } from '../../models/profile/profile.interface';

const userList: Profile[] = [
  {firstName: "Alex", lastName: "Pianetta", avatar: "assets/img/logo.png", email: "aapiane09@gmail.com", dateOfBirth: new Date() },
  {firstName: "Beyoncé", lastName: "Knowles-Carter", avatar: "assets/img/logo.png", email: "queenbey@beyhive.com", dateOfBirth: new Date() },
  {firstName: "Adele", lastName: "Britishlady", avatar: "assets/img/logo.png", email: "adele@britishlady.co.uk", dateOfBirth: new Date() },
  {firstName: "Lady", lastName: "Gaga", avatar: "assets/img/logo.png", email: "gaga@hausofgaga.com", dateOfBirth: new Date() },
  {firstName: "Barack", lastName: "Obama", avatar: "assets/img/logo.png", email: "potus44@whitehouse.gov", dateOfBirth: new Date() }
]

export const USER_LIST = userList;
