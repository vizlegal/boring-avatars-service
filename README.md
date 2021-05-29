## How to use Boring Avatars service

To generate a custom avatar just embed the following URL `https://source.boringavatars.com/` and append a variant, size and a username to generate a custom avatar.

### Variants
You can use one of the variants `marble`, `beam`, `pixel`, `sunset`, `ring` or `bauhaus`. 

```
https://source.boringavatars.com/marble
```

![Avatar using marble variant](https://source.boringavatars.com/marble)

### Custom size

```
https://img.boringavatars.com/marble/120

```

![Avatar of 120px](https://source.boringavatars.com/marble/120)

### Custom colors
You can pass an array of colors using the parameter `color` 

```
https://source.boringavatars.com/marble/120/haykan?colors=264653,2a9d8f,e9c46a,f4a261,e76f51
```
![Avatar for Hayk An](https://source.boringavatars.com/marble/120/haykan?colors=264653,2a9d8f,e9c46a,f4a261,e76f51)


### Name

Each name will generate a unique `avatar`. Just replace `haykan` with an `username` or `email`


```
https://source.boringavatars.com/marble/120/haykan
```
![Avatar for Hayk An](https://source.boringavatars.com/marble/120/haykan)


### Random avatar
If you just want to use random avatars without providing usernames, you can use the root endpoint. You will receive an `svg` image with a 80*80px size using the `marble` variant.

```
https://source.boringavatars.com/
```

![Random avatar](https://source.boringavatars.com/)

