
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;

const About = () => {

    return (
        <Box>
            <Banner/>
            <Wrapper>
                <Typography variant="h3">Umpire's Call</Typography>
                <Text variant="h5">Umpire's Call is an open platform for all cricket lovers out there to prove a point - Cricket is best enjoyed when analysed.<br />
                    Share your unique thoughts on this Platform and let thousands hear your voice through your CricBlogs.
                </Text>
                <Text variant="h5">
                    Connect With us!! We would love to hear from you!!
                        <Link href="mailto:debspandan.business@gmail.com?Subject=Connecting with respect to Umpire's Call" target="_blank" color="inherit">
                            <Email />
                        </Link>.
                </Text>
            </Wrapper>
        </Box>
    )
}

export default About;