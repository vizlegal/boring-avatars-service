const React = require('react');
const { renderToString } = require('react-dom/server');
const Avatar = require('boring-avatars').default;

const DEFAULT_COLORS = ["#1A1C39", "#E62648", "#ffb142", "#34ace0", "#ffda79"].join(',');
const DEFAULT_SIZE = 120;
const DEFAULT_VARIANT = 'beam';

const VALID_VARIANTS = new Set([
    'marble', 'beam', 'pixel', 'sunset', 'ring', 'bauhaus'
]);

function normalizeColors(colors) {
    const colorPalette = colors.split(',');

    if (colorPalette.length) {
        return colorPalette.map((color) => color.startsWith('#') ? color : `#${color}`);
    }
}

const app = require('express')();

app.get('/favicon.ico', (req, res) => { 
    res.sendStatus(204);
});

app.get('/:variant?/:size?/:name?', (req, res) => {
    const { variant = DEFAULT_VARIANT, size = DEFAULT_SIZE } = req.params
    const name = req.query.name || req.params.name || Math.random().toString();
    const colors = normalizeColors(req.query.colors || DEFAULT_COLORS);
    const square = req.query.hasOwnProperty('square');

    if (!VALID_VARIANTS.has(variant)) {
        return res.status(400).send('Invalid variant');
    }

    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');

    const svg = renderToString(
        React.createElement(Avatar, {
            size,
            name,
            variant,
            colors,
            square,
        }, null)
    );

    res.end(svg);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on ${port}, http://localhost:${port}`);
});
