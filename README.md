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
https://source.boringavatars.com/ring/80

```

![Avatar of 120px](https://source.boringavatars.com/ring/80)


```
https://source.boringavatars.com/ring/160

```

![Avatar of 120px](https://source.boringavatars.com/ring/120)


### Custom colors
You can pass an array of colors using the parameter `color` 

```
https://source.boringavatars.com/marble/120/haykan?colors=264653,2a9d8f,e9c46a,f4a261,e76f51
```
![Avatar for Hayk An](https://source.boringavatars.com/marble/120/haykan?colors=264653,2a9d8f,e9c46a,f4a261,e76f51)


### Name

You can use a `username`, `email` or any random text to generate a unique `avatar`. 


```
https://source.boringavatars.com/marble/120/Maria%20Mitchell
```
![Avatar for Hayk An](https://source.boringavatars.com/marble/120/Maria%20Mitchell)


### Random avatar
If you just want to use random avatars without providing usernames, you can use the root endpoint. You will receive an `svg` image with a 80*80px size using the `marble` variant.

```
https://source.boringavatars.com/
```

![Random avatar](https://source.boringavatars.com/)

