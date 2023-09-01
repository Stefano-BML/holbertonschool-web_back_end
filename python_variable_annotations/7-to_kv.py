#!/usr/bin/env python3
"""
Mixed Tuple
"""
from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """
    Tuple with string and int or float
    """

    cncat: Tuple(str, Union[int, float])
    cncat = (k, v**2)

    return cncat
