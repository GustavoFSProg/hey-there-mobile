import React from 'react'
import profile from '../../mocks/profile'
import Container from '../../components/Container'
import Avatar from '../../components/Avatar'
import { Box, Text } from './styles'

const Profile: React.FC = () => {
  return (
    <Container>
      <Box>
        <Avatar source={profile.avatarImg} size={100} />

        <Text>{`Name: ${profile.name}`}</Text>
        <Text>{`Email: ${profile.email}`}</Text>
        <Text>{`Status: ${profile.statusMessage}`}</Text>
      </Box>
    </Container>
  )
}

export default Profile
