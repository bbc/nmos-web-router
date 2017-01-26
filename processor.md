# Processor

The end point can be found here: `/x-ipstudio/pipelinemanager/v1.0/caps/processor/  `

_Maybe things should have been pluralised_

This endpoints return an object with `key` to a `processor`
e.g.

```json
{
  "name_0": {},
  "name_1": {},
  "name_2": {}
}
```

## Processor Schema

Each processor will look like the following

```json
{
  "executable": "string",
  "ui": {},
  "input": {},
  "output": {},
  "paramspec": {}
}
```

### UI Schema

Each `ui` will look like the following

```json
{
  "category": "string",
  "description": "string",
  "name": "string"
}
```

where each processor may share `category` whilst each `ui.name` is meant to be unique, _this doesn't seem to be a strict rule_

e.g.

```json
{
  "processor_0": {
    "ui": {
      "category": "Encode",
      "description": "x264 AVC-Intra encoder",
      "name": "AVC-I Encoder"
    }
  },
  "processor_1": {
    "ui": {
      "category": "Encode",
      "description": "x264 8-bit h264 encoder",
      "name": "H264-8 Encoder"
    }
  },
  "processor_1": {
    "ui": {
      "category": "Decode",
      "description": "FFmpeg VP8 decoder",
      "name": "VP8 Decoder"
    }
  }
}
```

### Input/Output Schema

both of these look pretty much the same.

```json
{
  "key": {
    "description": "string",
    "name": "key",
    "type": "dynamic",
    "caps": {"formats": []},
    "spec": {},
    "spec_0": {},
    "spec_1": {}
  }
}
```
you can have many specs in here, but most are inside the `"spec"` object. i.e. you have have loads of `"spec_x"` but will always have one `"spec"`

some example `"spec_x"`'s  `"tags", "label", "connector", "VidshmSegSize"`

the `type` can be `"dynamic"` or `"static"` but it I have yet to come across `"static"`

### Paramspec Schema

This is an object of specs

### Spec Schema

All specs are a `key` to an object and each will have the following values as a minimum

```json
{
  "type": "enum",
  "writeable": true,
  "max_modify_state": 0,
  "detail_level": 0,
  "description": "",
  "default": {},
}
```



* the `"type"` is an enum
* the `"default"` value depends on the `"type"`
* This is a map for the `"detail_level"`

level | value
---|---
0 | Basic
1 | Advanced
2 | Debug

every spec can also have the following

```json
"ui_hint": {
  "function": "input|output",
  "type": "hidden"
}
```

which means this value can not be seen or edited?

### Spec Types Schema

What follows is the schema for each `"type"` for a `spec`

#### Integer

```json
{
  "type": "INTEGER",
  "default": 1,
  "div_per_unit": 1,
  "scale": "LIN",
  "min": 1,
  "max": 1,
  "units": "string"
}
```

`"scale"` can be one of two values `"LIN"` or `"LOG"` which mean the number will grow linearly or logarithmically

#### Float

```json
{
  "type": "FLOAT",
  "default": 1.0,
  "div_per_unit": 1,
  "scale": "LIN",
  "min": 1.0,
  "max": 1.0,
  "units": "string"
}
```

same as integer, but with floats

#### Choice

```json
{
  "type": "CHOICE",
  "default": "key_0",
  "items": {
    "key_0": "string",
    "key_1": "string",
    "key_2": "string"
  }
}
```

#### Tags

```json
{
  "type": "TAGS",
  "default": {}
}
```

This can take the form of a simple map e.g.

```json
{
  "key_0": "string",
  "key_1": "string",
  "key_2": "string"
}
```

#### Boolean

```json
{
  "type": "BOOLEAN",
  "default": false
}
```

#### Timestamp

```json
{
"type": "TIMESTAMP",
"default": "0:0",
}
```

#### Object

```json
{
"type": "OBJECT",
"default": {},
"spec": {}
}
```

this is an object of specs

#### Array

```json
{
"type": "ARRAY",
"default": [],
"spec": {}
}
```

this is an array of specs

#### Pair

```json
{
"type": "PAIR",
"default": [],
"spec": {}
}
```

this is an array of specs which has a max size of 2
