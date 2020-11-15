const vs = `
    #ifdef GL_ES
    precision mediump float;
    #endif
    
    #define PI 3.14159265359
    
    // those are the mandatory attributes that the lib sets
    attribute vec3 aVertexPosition;
    attribute vec2 aTextureCoord;

    // those are mandatory uniforms that the lib sets and that contain our model view and projection matrix
    uniform mat4 uMVMatrix;
    uniform mat4 uPMatrix;

    uniform mat4 planeTextureMatrix;

    // if you want to pass your vertex and texture coords to the fragment shader
    varying vec3 vVertexPosition;
    varying vec2 vTextureCoord;

    varying float vDirection;

    uniform float uDirection;

    void main() {
        vec3 position = aVertexPosition;

        float y = sin((position.x * 0.5 - 0.5) * PI) * uDirection;

        position.y -= y;
        
        gl_Position = uPMatrix * uMVMatrix * vec4(position, 1.0);

        // set the varyings
        vTextureCoord = (planeTextureMatrix * vec4(aTextureCoord, 0., 1.)).xy;
        vVertexPosition = position;

        vDirection = uDirection;
    }
    `;

const fs = `
#ifdef GL_ES
  precision mediump float;
#endif

#define S(a,b,n) smoothstep(a,b,n)

// get our varyings
varying vec3 vVertexPosition;
varying vec2 vTextureCoord;


// our texture sampler (default name, to use a different name please refer to the documentation)
uniform sampler2D planeTexture;

uniform float vDirection;
uniform float uTime;

void main(){

vec2 textureCoord = vTextureCoord;

const float PI = 3.141592;

textureCoord.x += (
cos(textureCoord.x * 2.5 + ((uTime * (PI / 3.0)) * 0.031))
+ cos(textureCoord.y * 2.5 + ((uTime * (PI / 2.489)) * 0.017))
) * 0.0075;

textureCoord.y += (
sin(textureCoord.y * 2.5 + ((uTime * (PI / 2.023)) * 0.023))
+ sin(textureCoord.x * 2.5 + ((uTime * (PI / 3.1254)) * 0.037))
) * 0.0125;

gl_FragColor = texture2D(planeTexture, textureCoord);

    }
    `;

export { vs, fs };
