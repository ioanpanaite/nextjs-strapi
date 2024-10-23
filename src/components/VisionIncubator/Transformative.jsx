import * as React from 'react';
import { useTranslation } from 'next-i18next';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { Box, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import AnalyticAnimation from '../Share/AnalyticAnimation'

export default function Transformative() {
  const { t } = useTranslation("vision-incubator");

  const data = [
    {
      title: t("1. Enhanced Creativity"),
      description: t("1. Enhanced Creativity Description")
    },
    {
      title: t("2. Purposeful Identity"),
      description: t("2. Purposeful Identity Description")
    },
    {
      title: t("3. Strategic Synergy"),
      description: t("3. Strategic Synergy Description")
    },
    {
      title: t("4. Focused Direction"),
      description: t("4. Focused Direction Description")
    },
    {
      title: t("5. Confidence and Resilience"),
      description: t("5. Confidence and Resilience Description")
    }
  ]

  return (
    <>
      <Box
        sx={(theme) => ({
          width: '100%',
          backgroundImage: { xxl: `linear-gradient(90deg, ${theme.palette.primary.white} 50%, ${theme.palette.primary.ground} 50%)` },
        })}
      >
        <Box
          id={'ImpactPerformance'}
          sx={(theme) => ({
            width: { md: '100%' },
            height: { xs: '100%', md: '640px' },
            maxWidth: { md: '1440px', xl: '1920px' },
            display: 'flex',
            margin: '0 auto',
            position: 'relative',
            py: { xs: 0 },
            overflow: 'hidden'
          })}
        >
          <Box
            sx={{
              width: '100%',
              height: { xs: '70px', xl: '5vw' },
              maxWidth: '91vw',
              position: 'absolute',
              alignItems: 'center',
              margin: '0 auto',
              backgroundImage: 'url(/images/pages/analytic-devider.svg)',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              top: { xs: '50px', sm: '40px', md: '64px' },
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 10
            }} />

          <Grid container spacing={5} sx={{
            my: { xs: '0' },
            flexDirection: { xs: 'row', sm: 'row-reverse' }
          }}>
            <Grid item xs={12} sm={6} sx={{ py: '0px !important', paddingLeft: { md: '0px !important' } }}>
              <Container
                sx={{
                  display: 'flex',
                  position: 'relative',
                  flexDirection: 'column',
                  alignItems: 'center',
                  backgroundColor: theme => theme.palette.primary.ground,
                  height: { sm: '600px', md: '640px' },
                  zIndex: 1,
                  overflow: { sm: 'hidden' }
                }}
              >
                <AnalyticAnimation />
                <Box
                  sx={{
                    position: 'relative',
                    zIndex: 3,
                    py: { xs: 10, smd: 0 },
                    transform: { sm: 'scale(0.7)', md: 'scale(1)' },
                    top: { xs: 50, sm: 60, md: 130 }
                  }}
                >
                  <Box
                    sx={{
                      boxShadow: theme => `-20px 20px ${theme.palette.secondary.primary}`,
                      backgroundPosition: 'center',
                      backgroundImage: `url("/images/pages/transformative.jpg")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'cover',
                      width: 360,
                      height: 360
                    }}
                  >
                  </Box>
                </Box>
                <Box
                  sx={{
                    top: 0,
                    left: 0,
                    zIndex: 2,
                    position: 'absolute',
                    alignItems: 'center',
                    margin: '0 auto'
                  }}>
                  <Box sx={(theme) => ({
                    width: 0,
                    height: 0,
                    borderBottom: { xs: '100vh solid transparent', sm: '600px solid transparent', md: '900px solid transparent' },
                    borderRight: { xs: '150px solid transparent', sm: '150px solid transparent', md: '150px solid transparent' },
                    borderLeft: { xs: `100vw solid ${theme.palette.primary.white}`, sm: `300px solid ${theme.palette.primary.white}`, md: `440px solid ${theme.palette.primary.white}` }
                  })}
                  />
                </Box>
              </Container>
            </Grid>
            <Grid item xs={12} sm={6} sx={{ py: '0px !important' }}>
              <Container
                sx={(theme) => ({
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'left',
                  maxHeight: { md: 640 },
                  py: { xs: 8, sm: 12, md: 32 },
                  paddingLeft: { sm: '36px', md: 7, xxl: 32 },
                  paddingRight: { md: 0 },
                  position: 'relative',
                  backgroundColor: { xs: theme.palette.primary.grey, sm: theme.palette.primary.white }
                })}
              >
                <Stack spacing={0} useFlexGap>
                  <Typography
                    component="h1"
                    variant="h1"
                    sx={theme => ({
                      display: 'flex',
                      flexDirection: { xs: 'column', md: 'row' },
                      fontSize: { xs: 24, sm: 30, md: 35 },
                      fontWeight: 'bold',
                      textAlign: { xs: 'center', sm: 'left' },
                      zIndex: 1,
                      color: { xs: theme.palette.primary.main, sm: theme.palette.primary.main }
                    })}
                  >
                    {t("Transformative Title")}
                  </Typography>
                  <Typography
                    component="div"
                    variant="div"
                    sx={theme => ({
                      display: 'flex',
                      flexDirection: { xs: 'column', md: 'row' },
                      fontSize: { xs: 16 },
                      maxWidth: { md: '500px' },
                      marginTop: { xs: 3, md: 5 },
                      pb: { xs: 4, sm: 0 },
                      textAlign: { xs: 'center', sm: 'left' },
                      zIndex: 1,
                      color: theme.palette.primary.main
                    })}
                  >
                    {t("Transformative Description")}
                  </Typography>
                </Stack>
              </Container>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Grid container spacing={5} sx={{ my: { xs: '0' }, py: { xs: 6, sm: 8, md: 12 }, pb: { xs: 12 }, px: { sm: '36px', xxl: 20 } }}>
        {
          data && data.map(val => (
            <Grid item key={val.title} xs={12} sm={6} md={4} sx={{ py: '0px !important', maxHeight: { sm: '100%', md: 200 } }}>
              <Container
                sx={(theme) => ({
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'left',
                  py: { xs: 2, sm: 4, md: 4 },
                  pb: { xs: '26px', sm: '10px' },
                  zIndex: 2,
                  position: 'relative',
                  backgroundColor: { xs: 'white', sm: 'white' }
                })}
              >
                <Stack spacing={0} useFlexGap>
                  <Typography
                    component="h1"
                    variant="h1"
                    sx={theme => ({
                      display: 'flex',
                      flexDirection: { xs: 'column', md: 'row' },
                      fontSize: { xs: 18 },
                      fontWeight: 'bold',
                      color: { xs: theme.palette.primary.main, sm: theme.palette.primary.main }
                    })}
                  >
                    {val.title}
                  </Typography>
                  <Typography
                    component="div"
                    variant="div"
                    sx={theme => ({
                      display: 'flex',
                      flexDirection: { xs: 'column', md: 'row' },
                      fontSize: { xs: 16 },
                      marginTop: { xs: 2 },
                      pb: { xs: 0 },
                      color: { xs: theme.palette.primary.main, sm: theme.palette.primary.main }
                    })}
                  >
                    {val.description}
                  </Typography>
                </Stack>
              </Container>
            </Grid>
          ))
        }
      </Grid>
    </>
  );
}
