/** @jsxImportSource theme-ui */
import nav from '../data/navigation.json';

const Nav = () => {
  return (
    <div
      sx={{
        backgroundColor: '#6FA9ED',
      }}
    >
      <div
        sx={{
          maxWidth: 1220,
          mx: 'auto',
          display: 'flex',
          color: 'white',
          pt: 12,
        }}
      >
        <div sx={{ display: 'flex', alignItems: 'center' }}>
          <div sx={{ mr: 55 }}>consulto</div>
          {nav.map((item, index) => {
            return (
              <ul key={index} sx={{ mb: 0 }}>
                <a
                  href={item.link}
                  sx={{ textDecoration: 'none', color: 'white' }}
                >
                  {item.title}
                </a>
              </ul>
            );
          })}
        </div>
        <div sx={{ display: 'flex', ml: '21em', alignItems: 'center' }}>
          <a href="/" sx={{ mr: 25, textDecoration: 'none', color: 'black' }}>
            {' '}
            Login
          </a>
          <a
            href="/"
            sx={{
              px: 20,
              py: 2,
              borderRadius: 20,
              textDecoration: 'none',
              backgroundColor: '#1C4F8B',
              color: 'white',
              '&:hover': {
                color: 'black',
              },
            }}
          >
            Sign in
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
