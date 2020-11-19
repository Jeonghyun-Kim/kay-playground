import React from 'react';
import cn from 'classnames';
import { Input, Button } from '@components/ui';

import { Root } from './ArtworkUpload.styles';

interface Artwork {
  _id?: string;
  title: string;
  year: number;
  name: string;
  description: string;
  price: number;
}

interface ArtworkError {
  title: string;
  year: string;
  name: string;
  description: string;
  price: string;
}

const defaultArtwork: Artwork = {
  title: '',
  year: 2020,
  name: '',
  description: '',
  price: 0,
};

const defaultError: ArtworkError = {
  title: '',
  year: '',
  name: '',
  description: '',
  price: '',
};

interface Props {
  className?: string;
}
const ArtworkUpload: React.FC<Props> = ({ className, ...props }) => {
  const [artwork, setArtwork] = React.useState<Artwork>(defaultArtwork);
  const [error, setError] = React.useState<ArtworkError>(defaultError);
  const [response, setResponse] = React.useState<string>('');
  const [loading, setLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (Object.is(defaultError, error)) setResponse('');
    else setResponse('check again');
  }, [error, setResponse]);

  const handleSubmit = React.useCallback(async () => {
    const { title, name, description } = artwork;
    if (!title) return setError({ ...error, title: 'fill the title field.' });
    if (!name) return setError({ ...error, name: 'fill the name field. ' });
    if (!description)
      return setError({
        ...error,
        description: 'fill the description field. ',
      });
    try {
      setLoading(true);
      await fetch('/api/artwork', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(artwork),
      });
      setResponse('Sent');
      setLoading(false);
      setTimeout(() => setResponse(''), 3000);
    } catch (err) {
      setLoading(false);
      setResponse(JSON.stringify(err));
    }
  }, [artwork, error]);

  return (
    <Root
      className={cn(className, 'flex flex-col max-w-xl mx-auto')}
      {...props}
    >
      <Input
        type="text"
        label="title"
        value={artwork.title}
        error={!!error.title}
        onChange={(e) => setArtwork({ ...artwork, title: e.target.value })}
        autoComplete="off"
      />
      <Input
        type="number"
        label="year"
        value={artwork.year}
        error={!!error.year}
        onChange={(e) => {
          if (e.target.value.length <= 4)
            setArtwork({ ...artwork, year: Number(e.target.value) });
        }}
        autoComplete="off"
        min={1500}
        max={2020}
      />
      <Input
        type="text"
        label="name"
        value={artwork.name}
        error={!!error.name}
        onChange={(e) => setArtwork({ ...artwork, name: e.target.value })}
        autoComplete="off"
      />
      <Input
        type="text"
        label="description"
        value={artwork.description}
        error={!!error.description}
        onChange={(e) =>
          setArtwork({ ...artwork, description: e.target.value })
        }
        autoComplete="off"
      />
      <Input
        type="number"
        label="price"
        value={artwork.price}
        error={!!error.price}
        onChange={(e) =>
          setArtwork({ ...artwork, price: Number(e.target.value) })
        }
        autoComplete="off"
      />
      <div className="flex justify-end mt-6 pr-2">
        <Button
          variant="slim"
          onClick={() => {
            handleSubmit();
          }}
          loading={loading}
          disabled={loading}
        >
          Send
        </Button>
      </div>
      <div className="w-full overflow-hidden">
        <span className="response">{response}</span>
      </div>
    </Root>
  );
};

export default ArtworkUpload;
